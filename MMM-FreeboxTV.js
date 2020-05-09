/* MMM-FreeboxTV */

Module.register("MMM-FreeboxTV", {
    defaults: {
      debug: false,
      autoReplay: true,
      localPlayer: "omxplayer", // "omxplayer" or "vlc"
      moduleOffset: 0, // Offset to align OMX player windows
      fullcreen: false,
      width: 384,
      height: 216,
      TV: {
        protocol: "tcp", // 'tcp' or 'udp'
        omxRestart: 24, // Hours
      },
    },

    start: function() {
      this.sendSocketNotification('CONFIG', this.config)
      this.FreeboxTV = {
        loaded: false,
        playing: false,
        channel: null,
        suspended: false,
      }
      this.moduleWidth= this.config.width + 6
      this.moduleHeight= this.config.height + 6
    },

    /* suspend()
     * This method is called when a module is hidden.
     */
    suspend: function() {
      console.log(`${this.name} is suspended...`)
      this.FreeboxTV.suspended = true
      this.stopStream()
    },

    resumed: function(callback) {
      console.log(`${this.name} has resumed... autoReplay: ${this.config.autoReplay}`)
      if (this.FreeboxTV.suspended && this.config.autoReplay) {
          this.FreeboxTV.suspended = false;
          this.notificationReceived("TV-PLAY", this.FreeboxTV.channel)
      } else this.FreeboxTV.suspended = false;
      if (typeof callback === "function") { callback() }
    },

    // Overwrite the module show method to force a callback.
    show: function(speed, callback, options) {
      if (typeof callback === "object") {
        options = callback
        callback = function() {}
      }

      newCallback = () => { this.resumed(callback) }
      options = options || {}

      MM.showModule(this, speed, newCallback, options)
    },

    getDom: function() {
      var wrapper = document.createElement("div")

      if (!this.FreeboxTV.loaded) {
        wrapper.innerHTML = "Loading " + this.name + "..."
        wrapper.className = "dimmed light small"
        return wrapper
      }

      wrapper.style.cssText = `width: ${this.moduleWidth}px; height:${this.moduleHeight}px`
      wrapper.className = "MMM-FreeboxTV wrapper"
      iw = this.getInnerWrapper()
      iw.appendChild(this.getCanvas())
      wrapper.appendChild(iw)
      wrapper.appendChild(document.createElement("br"))

      return wrapper
    },

    getCanvasSize: function(streamConfig) {
      var s = ''
      if (typeof streamConfig.width !== "undefined") { s += "width: " + streamConfig.width + "px; "; }
      if (typeof streamConfig.height !== "undefined") { s += "height: " + streamConfig.height + "px; line-height: " + streamConfig.height + ";"; }
      return s
    },

    getCanvas: function() {
      var canvas = document.createElement("canvas")
      canvas.id = "canvas_TV"
      canvas.className = "MMM-FreeboxTV canvas"
      return canvas
    },

    getInnerWrapper: function() {
      var innerWrapper = document.createElement("div")
      innerWrapper.className = "MMM-FreeboxTV innerWrapper"
      innerWrapper.style.cssText = this.getCanvasSize( { "width": this.config.width, "height": this.config.height })
      innerWrapper.id = "iw_TV"
      return innerWrapper
    },

    playStream: function(channel,fullscreen = false) {
      var canvasId = "canvas_TV"
      var canvas = document.getElementById(canvasId)
      var omxPayload = []

      if (this.FreeboxTV.playing) {
        this.stopStream()
      }

      if (["omxplayer", "vlc"].indexOf(this.config.localPlayer) !== -1) {
        var rect = canvas.getBoundingClientRect()
        var offset = {}
        var payload = { name: channel }
        if (typeof this.config.moduleOffset === "object") {
          offset.left = ("left" in this.config.moduleOffset) ? this.config.moduleOffset.left : 0
          offset.top = ("top" in this.config.moduleOffset) ? this.config.moduleOffset.top : 0
        } else {
          offset.left = this.config.moduleOffset
          offset.top = this.config.moduleOffset
        }
        var box = {};
        if (fullscreen) {
          payload.fullscreen = true
        } else {
          box = {
            top: Math.round(rect.top + offset.top), // Compensate for Margins
            right: Math.round(rect.right + offset.left), // Compensate for Margins
            bottom: Math.round(rect.bottom + offset.top), // Compensate for Margins
            left: Math.round(rect.left + offset.left) // Compensate for Margins
          }
        }
        payload.box = box

        if (this.config.localPlayer === "omxplayer" && !this.FreeboxTV.suspended) {
          this.sendSocketNotification("PLAY_OMXSTREAM", payload)
        } else if (this.config.localPlayer === "vlc" && !this.FreeboxTV.suspended) {
          this.sendSocketNotification("PLAY_VLCSTREAM", payload)
        }
        this.FreeboxTV.playing = true
        this.FreeboxTV.channel = channel
      }
    },

    stopStream: function(force) {
      if (force) {
        this.FreeboxTV.playing = false
        this.FreeboxTV.channel = null
        this.FreeboxTV.suspended = false
      }
      if (this.FreeboxTV.playing) {
        if (this.config.localPlayer === "omxplayer") {
          this.sendSocketNotification("STOP_OMXSTREAM")
        } else if (this.config.localPlayer === "vlc") {
          this.sendSocketNotification("STOP_VLCSTREAM")
        }
        this.FreeboxTV.playing = false
        if (!this.FreeboxTV.suspended)
          this.FreeboxTV.channel= null
      }
    },

    getStyles: function() {
      return ["MMM-FreeboxTV.css"]
    },

    notificationReceived: function(notification, payload, sender) {
      if (notification === 'TV-PLAY') {
        this.playStream(payload,this.config.fullscreen)
      }
      if (notification === 'TV-STOP') {
        this.stopStream(true)
      }
    },
    
    socketNotificationReceived: function(notification, payload) {
      if (notification === "STARTED") {
        if (!this.FreeboxTV.loaded) {
          this.FreeboxTV.loaded = true
          this.updateDom(1000)
        }
      }
    }
});

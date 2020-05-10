/** MMM-FreeboxTV **/
/** commande vocale **/
/**  @bugsounet  **/

var recipe = {
  transcriptionHooks: {
    "stop": {
      pattern: "TV stop",
      command: "stop"
    },
    "france2": {
      pattern: "TV france 2",
      command: "france2"
    },
    "france3": {
      pattern: "TV france 3",
      command: "france3"
    },
    "france4": {
      pattern: "TV france 4",
      command: "france4"
    },
    "france5": {
      pattern: "TV france 5",
      command: "france5"
    },
    "arte": {
      pattern: "TV arte",
      command: "arte"
    },
    "c8": {
      pattern: "TV c8",
      command: "c8"
    },
    "nrj12": {
      pattern: "TV nrj12",
      command: "nrj12"
    },
    "lcp": {
      pattern: "TV lcp",
      command: "lcp"
    },
    "bfmtv": {
      pattern: "TV bfm tv",
      command: "bfmtv"
    },
    "cnews": {
      pattern: "TV cnews",
      command: "cnews"
    },
    "cstar": {
      pattern: "TV cstar",
      command: "cstar"
    },
    "gulli": {
      pattern: "TV gulli",
      command: "gulli"
    },
    "franceo": {
      pattern: "TV france ô",
      command: "franceo"
    },
    "equipe": {
      pattern: "TV l'équipe",
      command: "equipe"
    },
    "rmcstory": {
      pattern: "TV RMC story",
      command: "rmcstory"
    },
    "rmcdecouverte": {
      pattern: "TV RMC découverte",
      command: "rmcdecouverte"
    },
    "cherie25": {
      pattern: "TV chérie 25",
      command: "cherie25"
    },
    "franceinfo": {
      pattern: "TV France Info",
      command: "franceinfo"
    },
    "parispremiere": {
      pattern: "TV Paris Première",
      command: "parispremiere"
    },
    "RTL9": {
      pattern: "TV RTL9",
      command: "rtl9"
    },
    "gameone": {
      pattern: "TV Game One",
      command: "gameone"
    },
    "AB1": {
      pattern: "TV AB1",
      command: "AB1"
    },
    "teva": {
      pattern: "TV Téva",
      command: "teva"
    },
    "m6music": {
      pattern: "TV M6 Music",
      command: "m6music"
    },
    "mcm": {
      pattern: "TV MCM",
      command: "mcm"
    },
    "mangas": {
      pattern: "TV Mangas",
      command: "mangas"
    },
    "equidia": {
      pattern: "TV Equidia",
      command: "equidia"
    },
    "automoto": {
      pattern: "TV Automoto",
      command: "automoto"
    },
    "rfmtv": {
      pattern: "TV RFM TV",
      command: "rfmtv"
    },
    "mcmtop": {
      pattern: "TV MCM top",
      command: "mcmtop"
    },
    "bfmbusiness": {
      pattern: "TV BFM Business",
      command: "bfmbusiness"
    }
  },

  commands: {
    "france2": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 2
          return params 
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "france3": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 3
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "france4": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 14
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "france5": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 5
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "arte": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 7
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "c8": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 8
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "nrj12": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 12
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },   
    "lcp": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 13
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "bfmtv": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {Téva
          params = 15
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "cnews": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 16
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "cstar": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 17
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "gulli": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 18
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "franceo": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 19
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "equipe": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 21
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "rmcstory": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 23
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "rmcdecouverte": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 24
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "cherie25": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 25
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "franceinfo": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 27
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "parispremiere": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 28
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "rtl9": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 29
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "gameone": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 50
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "AB1": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 51
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "teva": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 53
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "m6music": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 64
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "mcm": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 87
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "mangas": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 90
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "equidia": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 176
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "automoto": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 180
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "rfmtv": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 261
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "mcmtop": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 271
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "bfmbusiness": {
      notificationExec: {
        notification: "TV-PLAY",
        payload: (params) => {
          params = 347
          return params
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "stop": {
      notificationExec: {
        notification: "TV-STOP"
      },
      soundExec: {
        chime: "open"
      }
    },
  }
}
exports.recipe = recipe

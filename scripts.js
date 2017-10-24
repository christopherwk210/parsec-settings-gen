var types = {
  multipleChoice: 1,
  number: 2,
  string: 3
};

var options = [
  {
    name: 'LAN quality',
    description: 'Defines the quality of the video versus lowering latency over LAN.',
    type: types.multipleChoice,
    value: 'app_lan_quality',
    options: [
      {
        name: 'Performance',
        value: 1
      },
      {
        name: 'Balanced',
        value: 2
      },
      {
        name: 'Quality',
        value: 3
      }
    ],
    default: 0
  },
  {
    name: 'WAN quality',
    description: 'Defines the quality of the video versus lowering latency over WAN.',
    type: types.multipleChoice,
    value: 'app_wan_quality',
    options: [
      {
        name: 'Performance',
        value: 1
      },
      {
        name: 'Balanced',
        value: 2
      },
      {
        name: 'Quality',
        value: 3
      }
    ],
    default: 0
  },
  {
    name: 'Max bitrate setting',
    description: 'Determines the maximum amount of bandwidth Parsec will use when streaming video to your client.',
    type: types.number,
    value: 'encoder_bitrate',
    default: 10
  },
  {
    name: 'Video Stream Frames Per Second',
    description: 'If you\'d like to lower the FPS of your stream without impacting the server display refresh rate, you can change this setting.',
    type: types.number,
    value: 'encoder_fps',
    default: 0
  },
  {
    name: 'Encoder Video Output Quality',
    description: 'Sets the quality of video. The higher this value is, the more \'blurred\' the image will become.',
    type: types.number,
    value: 'encoder_min_qp',
    default: 25
  },
  {
    name: 'Encoder Quality',
    description: 'This defines how much pressure you want to put on your encoder to meet the demands of streaming.',
    type: types.multipleChoice,
    value: 'encoder_quality',
    options: [
      {
        name: 'Low',
        value: 1
      },
      {
        name: 'Medium',
        value: 2
      },
      {
        name: 'High',
        value: 3
      }
    ],
    default: 0
  },
  {
    name: 'Networking Protocol',
    description: 'Defines the protocol to use.',
    type: types.multipleChoice,
    value: 'network_protocol',
    options: [
      {
        name: 'Parsec',
        value: 0
      },
      {
        name: 'TCP',
        value: 1
      }
    ],
    default: 0
  },
  {
    name: 'Network Adapter',
    description: 'Defines the network adapter to use.',
    type: types.number,
    value: 'network_adapter',
    default: 1
  },
  {
    name: 'Network IP Address',
    description: 'Defines the exact IP address or network adapter you want your client to use.',
    type: types.string,
    value: 'network_ip_address',
    default: '192.168.0.1'
  },
  {
    name: 'Force LAN connection',
    description: 'Forces a LAN connection be used.',
    type: types.multipleChoice,
    value: 'network_try_lan',
    options: [
      {
        name: 'Don\'t force',
        value: 0
      },
      {
        name: 'Force',
        value: 1
      }
    ],
    default: 0
  },
  {
    name: 'Ports',
    description: 'Defines the starting port to check for connections.',
    type: types.number,
    value: 'network_client_start_port',
    default: 9000
  },
  {
    name: 'Max Concurrent Connections',
    description: 'You can set the maximum number of friends connecting to your machine concurrently.',
    type: types.number,
    value: 'server_max_clients',
    default: 5
  },
  {
    name: 'VSync Setting For Parsec Window',
    description: 'Controls VSync',
    type: types.multipleChoice,
    value: 'client_vsync',
    options: [
      {
        name: 'On',
        value: 1
      },
      {
        name: 'Off',
        value: 0
      }
    ],
    default: 0
  },
  {
    name: 'Fullscreen',
    description: 'Set the client to use fullscreen.',
    type: types.multipleChoice,
    value: 'client_fullscreen',
    options: [
      {
        name: 'On',
        value: 1
      },
      {
        name: 'Off',
        value: 0
      }
    ],
    default: 1
  },
  {
    name: 'Windowed Mode',
    description: 'Set the client to use windowed mode.',
    type: types.multipleChoice,
    value: 'client_windowed',
    options: [
      {
        name: 'On',
        value: 1
      },
      {
        name: 'Off',
        value: 0
      }
    ],
    default: 1
  },
  {
    name: 'Window Width',
    description: 'Set the client width when running in windowed.',
    type: types.number,
    value: 'client_window_x',
    default: 1280
  },
  {
    name: 'Window Height',
    description: 'Set the client height when running in windowed.',
    type: types.number,
    value: 'client_window_y',
    default: 800
  },
  {
    name: 'Show Parsec Button',
    description: 'Show or hide the parsec button overlay.',
    type: types.multipleChoice,
    value: 'client_overlay',
    options: [
      {
        name: 'Show',
        value: 0
      },
      {
        name: 'Hide',
        value: 1
      }
    ],
    default: 0
  },
  {
    name: 'Decoding',
    description: 'Set decoding to use hardware or software.',
    type: types.multipleChoice,
    value: 'decoder_software',
    options: [
      {
        name: 'Hardware',
        value: 0
      },
      {
        name: 'Software',
        value: 1
      }
    ],
    default: 0
  },
  {
    name: 'Zero Copy',
    description: 'Mac-only: The zero-copy option tells your client to keep all video data in the GPU memory rather than moving it to system memory.',
    type: types.multipleChoice,
    value: 'decoder_zero_copy',
    options: [
      {
        name: 'Off',
        value: 0
      },
      {
        name: 'On',
        value: 1
      }
    ],
    default: 0
  },
  {
    name: 'Server Width',
    description: 'Forces server resolution width.',
    type: types.number,
    value: 'server_resolution_x',
    default: 1920
  },
  {
    name: 'Server Height',
    description: 'Forces server resolution height.',
    type: types.number,
    value: 'server_resolution_y',
    default: 1080
  },
  {
    name: 'Refresh Rate Of Server',
    description: 'You can set the refresh rate of the server display. The default is 60 hz.',
    type: types.number,
    value: 'server_refresh_rate',
    default: 60
  },
  {
    name: 'Audio Buffer',
    description: 'Controls the delay on the audio.',
    type: types.number,
    value: 'client_audio_buffer',
    default: 20000
  },
  {
    name: 'Muting The Remote Server',
    description: 'Controls muting the audio on the host computer\'s speakers.',
    type: types.multipleChoice,
    value: 'server_admin_mute',
    options: [
      {
        name: 'Off',
        value: 0
      },
      {
        name: 'On',
        value: 1
      }
    ],
    default: 1
  },
  {
    name: 'Keyboard Passthrough',
    description: 'Toggles immersive mode.',
    type: types.multipleChoice,
    value: 'client_immersive',
    options: [
      {
        name: 'Off',
        value: 0
      },
      {
        name: 'On',
        value: 1
      }
    ],
    default: 0
  },
  {
    name: 'Beta Channel',
    description: 'Toggles beta "warp" channel updating.',
    type: types.multipleChoice,
    value: 'app_channel',
    options: [
      {
        name: 'Stable',
        value: 'release'
      },
      {
        name: 'Warp',
        value: 'warp'
      }
    ],
    default: 0
  },
]

$(document).ready(function() {
  $(options).each(function(index, option) {
    var id = option.value;

    var row = $('<div class="row">');
    var leftCol = $('<div class="col-sm-9">');
    var rightCol = $('<div class="col-sm-3">');

    var button = $('<button class="btn btn-primary _generator">');
    button.data('id', id);
    button.data('val', option.value);
    button.text('Generate');
    button.on('click', function(e) {
      e.preventDefault();
      swal({
        html: '<h4>Here\'s your code:</h4>\n' + option.value + '=' + $('#' + id).val()
      });
    });

    var formGroup = $('<div class="form-group">');

    var label = $('<label>');
    label.attr('for', id);
    label.text(option.name);

    var subText = $('<small class="form-text text-muted">');
    subText.attr('id', id + 'Help');
    subText.text(option.description);

    var input;
    switch(option.type) {
      case types.multipleChoice:
        input = $('<select class="form-control">');
        $(option.options).each(function(index, subOption) {
          var sub = $('<option>');
          sub.attr('value', subOption.value);
          sub.text(subOption.name);
          input.append(sub);
        });
        input.attr('value', option.default);
        break;
      case types.string:
        input = $('<input class="form-control">');
        input.attr('type', 'text');
        input.attr('value', option.default);
        break;    
      case types.number:
        input = $('<input class="form-control">');
        input.attr('type', 'number');
        input.attr('value', option.default);
        break;
    }
    input.attr('id', id);
    input.attr('aria-describedby', id + 'Help');

    leftCol.append(input);
    rightCol.append(button);
    row.append(leftCol, rightCol);
    
    formGroup.append(label, row, subText);

    $('#main-form').append(formGroup);
  });
});

$('#gen-all').click(function() {
  var output = '<h4>Here\'s your code:</h4>\n';

  $('._generator').each(function(index, button) {
    output += $(button).data('val') + '=' + $('#' + $(button).data('id')).val() + '<br>';
  });

  swal({
    html: output
  });
});

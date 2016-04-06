var access_token = "16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587",
    access_parameters = {
        access_token: access_token
    };

var appSelector = 'mycph';
var app = document.getElementById(appSelector);
var ajax = {};

// CREATE A FORM
var form = document.createElement('form');
form.name = 'tagsearch';
form.addEventListener('submit', handleFormSubmission);

var content = document.createElement('div');

// CREATE THE SEARCH FIELD
var search = document.createElement('input');
search.type = 'text';
search.className = 'tag';
search.name = 'tag';
search.id = 'tag';

// CREATE THE SUBMIT BUTTON
var submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'fetch tags';

// ADD AN EVENT LISTENER ON SUBMIT SO THAT WE CAN DO SOMETHING WHEN CLICKED;

// ADD ABOVE ELEMENTS INTO THE HEADING
form.appendChild(search);
form.appendChild(submit);

// ADD THE FORM AND THE CONTENT INTO THE APP ELEMENT
app.appendChild(form);
app.appendChild(content);

// ABOVE THIS LINE, THE LOGIC:


// JSONP. See: http://stackoverflow.com/a/22780569/971008
function jsonp(url, callback) {
  var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  window[callbackName] = function(data) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);
}

function fetchGrams (tag, count, access_parameters) {

  var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=10&access_token=16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587';
  jsonp(url, function(response) {
 
    if(response.data.length) {
      content.innerHTML = "";
      for(var i in response.data) {
        var link = document.createElement('a');
        link.appendChild(document.createTextNode(response.data[i].link));
        link.href = response.data[i].link;
        content.appendChild(link);
        content.appendChild(document.createElement('br'));
      }
    } else {
      content.appendChild(document.createTextNode("no content was found"));
    }


  })

}

function handleFormSubmission(e) {
  
  var tag = this.tag.value;
  if (e.preventDefault) e.preventDefault();
  console.log("value:" , tag);

  if(tag.length) {
    fetchGrams(tag, 40, access_parameters);
  }

  return false;
}


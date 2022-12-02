
function getObjKeys(obj, value) {
    return Object.keys(obj).filter(key => obj[key] === value);
  }
  const firebaseConfig = {
    apiKey: "AIzaSyDI0H2L_8kk1CychC1kakCP1R-45A9ZC08",
    authDomain: "store-management-12dc9.firebaseapp.com",
    databaseURL: "https://store-management-12dc9-default-rtdb.firebaseio.com",
    projectId: "store-management-12dc9",
    storageBucket: "store-management-12dc9.appspot.com",
    messagingSenderId: "910377604053",
    appId: "1:910377604053:web:2d7faeb0a3d0d52baea35c"
  };

firebase.initializeApp(firebaseConfig);
var countRef = firebase.database().ref('count');

countRef.on('value', function(snapshot) {
    val = snapshot.val()
    zeros = getObjKeys(val, 0)
    count = Object.keys(val)
    let nonzeros = count.filter(x => !zeros.includes(x));
    
    nonzeros.forEach(function (item, index) {
        value = '#' + item + '-count'
        console.log(value)
        $(value).css("color","black")
        $(value).text(val[item])
        if (val[item] < 2){
            popup_alert(value,item)
          }    
      });
      
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function popup_alert(value,item){
    note = item + " stock is getting low"
    $(value).css("color","red")
    $("#notification").text(note)
    $("#box-notification").show()
    sleep(3000).then(() => { $("#box-notification").fadeOut('slow'); });
}

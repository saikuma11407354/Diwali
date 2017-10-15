function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
wishes = [
	'May this Diwali Light up new dreams, fresh hopes, undiscovered avenues, different perspectives, everything bright & beautiful and fill you days with pleasant surprises and moments.',
	'Diwali night is full of lights, may your life be filled with colors and lights of happiness',
	'Life with you is like Diwali, so lets promise to be together like this forever. Wish you a very Happy Diwali!',
	'May the light that we celebrate at Diwali show us the way and lead us together on the path of peace and social harmony',
	'Sending you smiles for every moment of your special day. Have a wonderful time and a very Happy Diwali!',
	'Happy, Happy Diwali! I hope the day has been blessed with the presence of those you love most, and many magical moments!',
	'HAPPY DIWALI TO YOU! May you celebrate it well. Surrounded by family, friends and lots of love and remember...',
	'On the precious moment of Diwali I wish you happy Diwali and I pray that you get all your endeavors fulfilled as well as you get lots of gifts and sweets this Diwali...',
	'This Diwali I wish you get a lot of crackers but you don’t get a match box to lit them. Save environment, so no to crackers...',
	'May you all attain full inner illumination, may the supreme light of lights enlighten your understanding.',
	'On Diwali, I wanted to send you wishes for a year filled with prosperity, health and lots of fun! Hope you have a happy Diwali!',
	' With lights dazzling, with love flushing around by your loved ones with loads of fun and joy, and with our loving wishes.',
	'May the beauty of Deepawali season fill your home with happiness and may the coming year provide You with all that bring you joy!',
	't is time to feel good, time for reunion, time to share happiness, time to feel being loved, time to show your love, time to live for others and time to wish for peace.'
];

div = document.getElementsByClassName('mainbody');

Height = screen.height;

message = wishes[Math.floor(Math.random()*wishes.length)];
elementmsg = document.getElementById('message');
elementmsg.innerHTML = message;
elementmsg.align = 'center';
elementmsg.style = 'color:black;font-size:35px;top:25%;position: fixed;';

id = getParameterByName('name');
idplacer = document.getElementById('wisher');
idplacer.innerHTML = "WHISHING YOU BY "+id;
idplacer.align = 'center';
idplacer.style = 'font-size:70px;top:70%;left:50%;position: fixed;';
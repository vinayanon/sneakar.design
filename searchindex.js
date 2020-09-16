// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "sneakar.design", "$ 124  sneakAr.design  Apart from our wide collections of sneakers,we offer custom designed sneakers.Browse and buy custom sneakers from Nike, Adidas, Vans, and more created by independent artists as per your requirement at an affordable pricing  Shop for latest Sneakers online from top brands like Nike, Adidas, Puma & more Get Sneakers in white, black, blue & more colours at sneakar.design  The global destination for authentic sneakers on desktop, iPhone and Android We guarantee authenticity on every sneaker purchase or your money back  Use the sneakar.design platform to Design your own sneakers from scratch, let our design team create them for you, or choose from over 100 exclusive designs   checkout our designs  write to us   name   mail id   site is under construction,wait until next beta services arrives thanks for visiting   ", "Shop for latest Sneakers online from top brands like Nike, Adidas, Puma & more. Get Sneakers in white, black, blue & more colours at sneakar.design.  Apart from our wide collections of sneakers,we offer custom designed sneakers.Browse and buy custom sneakers from Nike, Adidas, Vans, and more created by independent artists as per your requirement at an affordable pricing.Use the sneakar.design platform to Design your own sneakers from scratch, let our design team create them for you, or choose from over 100 exclusive designs.   ");
   this[database_length++] = new SearchPage("store.html", "store", "MEN  WOMEN  KIDS  NIKE AIR FORCE 1 HIGH  98$  LOW  67$  224$  NIKE AIR MAX 97  330$  JUST DO IT  JORDON MELO M11  175$  123$  242$  ULTRA BOOST  YEEZY 500  224$  213$  124$  CUSTOM STORE  REQUEST PRICE  Shop for latest Sneakers online from top brands like Nike, Adidas, Puma & more Get Sneakers in white, black, blue & more colours at sneakar.design    ", "");
   return this;
}

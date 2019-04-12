class TabLink {
  constructor(tabElement){
    //X assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // console.log(this.tabElement);

    //X Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    // console.log(this.tabData);

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
   

    //X Check to see if this.tabData is equal to 'all'
    if(this.tabData === "all"){
      //X If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(".card");
    } else {
      //X else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    }




     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    //  console.log(thisCardsArray);
    // this.cards = Array.from(this.cards).map(new TabCard(this.card));
    this.cards = Array.from(this.cards).map( card => new TabCard(card));
    // this.cards = thisCardsArray.map();
    // this.tabItem = new TabItem (this.itemElement);


    //X Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", () => {
      this.selectTab()
    });
  }

  selectTab(){

    //X Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");
    
    //X Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(function(element) {
      element.classList.remove("active-tab");
    });

    //X Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");

    //X Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach(function(element){
    //   element.style.display="none";
    // });

    cards.forEach( card => card.style.display="none")
    
    //X Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");
  
    //X Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    //X Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    //X Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";

  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));
// console.log(tabs);
// tabs.forEach(function (tab) {
//   return new TabLink (tab);
// });
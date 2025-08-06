function book(name,info){
    this.name = name;
    this.information = info;
    this.info = function (){
        return this.information;
    }
}

theHobbit = new book("The Hobbit", "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet");
console.log(theHobbit.info());
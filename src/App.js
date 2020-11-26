import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Show } from './components/Show'

const url = "https://www.googleapis.com/books/v1/volumes?q="
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText : "",
      books: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.search = this.search.bind(this)
  }

  API(name) {
    fetch(url`${name}`)
    .then((res) => res.json())
    .then(data => console.log(data))
  }

  search(e){
    this.setState({
      searchText: e.target.value
    })
    this.API(this.state.searchText)
  }

  handleKeyDown(e) {
      // .then(data => {
      //   let books = this.state.books
      //   let items = data.items.map((value) => {
      //     return {
      //       title: value.volumeInfo.title,
      //       author: value.volumeInfo.authors ? value.volumeInfo.authors.join(', ') : ' ',
      //       publisher: value.volumeInfo.publisher ? value.volumeInfo.publisher : ' ',
      //       published: value.volumeInfo.publishedDate ? value.volumeInfo.publishedDate : ' '
      //     }
      //   })
      //   books.push(items)
      //   this.setState({ books: books })
      // })
      let books = this.state.books
      books.push({
        title: data.volumeInfo.title,
        img: data.volumeInfo.imageLinks.smallThumbnail,
        author: data.volumeInfo.authors[0],
        publisher: data.volumeInfo.publisher,
        published: data.volumeInfo.publishedDate
      })
      this.setState({
        books: books
      })
  } 

  render() {
    return (
      <div className="App">
        <Header />
        <Search onClick={this.handleKeyDown} onChange={this.search} />
        <div className="Shows">
            {this.state.books.map((books,ind)=> <Show key={ind} {...books}/>)}
        </div>
      </div>
    );
  }
}

export default App;

const data = {
  "kind": "books#volume",
  "id": "5W-ChoTedM4C",
  "etag": "CITJmUtnrAs",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/5W-ChoTedM4C",
  "volumeInfo": {
      "title": "Quilting For Dummies",
      "authors": [
          "Cheryl Fall"
      ],
      "publisher": "John Wiley & Sons",
      "publishedDate": "2011-03-03",
      "description": "Get the know-how you need to create beautiful quilts and decorative quilted items Quilting is a fun hobby -- but where do you begin? From selecting fabrics and designing a quilt to stitching by hand or machine, this friendly guide shows you how to put all the pieces together -- and create a wide variety of quilted keepsakes for your home. We'll have you in stitches in no time! Discover how to * Select the right fabrics and threads * Design your masterpiece * Use quilting software * Save time with rotary cutters and other cool tools * Quilt by hand or machine * Get creative with applique",
      "industryIdentifiers": [
          {
              "type": "ISBN_10",
              "identifier": "1118054660"
          },
          {
              "type": "ISBN_13",
              "identifier": "9781118054666"
          }
      ],
      "readingModes": {
          "text": true,
          "image": true
      },
      "pageCount": 384,
      "printType": "BOOK",
      "categories": [
          "Crafts & Hobbies"
      ],
      "averageRating": 5,
      "ratingsCount": 6,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "1.6.9.0.preview.3",
      "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
      },
      "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=5W-ChoTedM4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=5W-ChoTedM4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com.vn/books?id=5W-ChoTedM4C&pg=PA154&dq=quilting&hl=&cd=1&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=5W-ChoTedM4C&source=gbs_api",
      "canonicalVolumeLink": "https://play.google.com/store/books/details?id=5W-ChoTedM4C"
  },
  "saleInfo": {
      "country": "VN",
      "saleability": "FOR_SALE",
      "isEbook": true,
      "listPrice": {
          "amount": 532609,
          "currencyCode": "VND"
      },
      "retailPrice": {
          "amount": 372826,
          "currencyCode": "VND"
      },
      "buyLink": "https://play.google.com/store/books/details?id=5W-ChoTedM4C&rdid=book-5W-ChoTedM4C&rdot=1&source=gbs_api",
      "offers": [
          {
              "finskyOfferType": 1,
              "listPrice": {
                  "amountInMicros": 532609000000,
                  "currencyCode": "VND"
              },
              "retailPrice": {
                  "amountInMicros": 372826000000,
                  "currencyCode": "VND"
              }
          }
      ]
  },
  "accessInfo": {
      "country": "VN",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.vn/books/download/Quilting_For_Dummies-sample-epub.acsm?id=5W-ChoTedM4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com.vn/books/download/Quilting_For_Dummies-sample-pdf.acsm?id=5W-ChoTedM4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=5W-ChoTedM4C&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
  },
  "searchInfo": {
      "textSnippet": "When you get your project to the point at which it&#39;s ready to be quilted, you have a <br>\nfew choices to consider depending on the time you have available for <b>quilting</b> <br>\nand the look you want the finished quilt to have. Basically, there are two ways to&nbsp;..."
  }
}
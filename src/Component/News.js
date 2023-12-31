import React, { Component } from 'react'
import Newsitem from "./Newsitem"
import Spinner from "./Spinner"
import PropTypes from "prop-types"
export default class News extends Component {
static defaultProps = {
    country:'in',
    pageSize : 8,
    category : 'general',
   }

   static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
   }
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e1f8fd500ae490c9785e2c048438e4a&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles ,
         totalResults: parsedData.totalResults,
        loading : false})
    }

    handlePrevClick = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e1f8fd500ae490c9785e2c048438e4a&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        
        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles,
            loading:false
        })
    }

    handleNextClick = async () =>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e1f8fd500ae490c9785e2c048438e4a&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({loading : true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            
            this.setState({
                page:this.state.page + 1,
                articles : parsedData.articles,
                loading : false
            })
        }
    }
  render() {
    return (
      <div className='container my-3 '>
         <h2 className='text-center'>NewsAdda - Top Headlines </h2>
         {this.state.loading && <Spinner/>}
         <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
               <Newsitem  title={element.title?element.title.slice(0,66):""} description={element.description?element.description.slice(0,100):""} imageurl={element.urlToImage } newsUrl={element.url}/>
              </div>
            })}
         </div> 
         <div className='container d-flex justify-content-between my-4'>
         <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
         </div>

      </div>
    )
  }
}

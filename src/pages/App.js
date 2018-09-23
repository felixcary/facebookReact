import React from 'react';
import SearchBar from '../component/SearchBar';
import BlogList from '../component/BlogList';

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends React.Component{
	constructor(){
		super()
		this.state={
			loading:true,
			search:'',
			blogs:[],
			blogsFiltered:[]
		}
	}

	componentDidMount(){
		this.handleGetBlogList()
		
	}

	handleGetBlogList = () => {
		fetch(link)
		.then(res => res.json())
		.then(res => this.setState({ blogs:res, blogsFiltered: res,loading:false }))
	}

	handleTypeSearch = event => {
	    const blogsFiltered = this.state.blogs.filter((blog) => {
	    	return blog.title.toLowerCase().indexOf(event.target.value) > -1
	    });
	    this.setState({ blogsFiltered: blogsFiltered });
	  };

	render(){
		if(this.state.loading){
			<div>Loading</div>
		}

		return(
			<div style={{marginLeft:'10%',marginRight:'10%'}}>
				<SearchBar 
					search={this.state.search}  
					onChangeSearch={this.handleTypeSearch} 
				/>
				{this.state.blogsFiltered.map((blog,index)=>( 
					<BlogList
						key={index}
						title={blog.title}
						content={blog.content}
						author={blog.author}
						date={blog.created_at}
					/>
				))}
				
			</div>
		)
	}
}

export default App
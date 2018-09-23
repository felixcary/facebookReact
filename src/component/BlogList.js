import React from "react";

const BlogList = props => {
  return (
    <div>
      <h1 style={styles.titleText}>{props.title}</h1>
      <p style={styles.contentText}>{props.content}</p>
      <p style={styles.contentText}>{props.author},{props.date}</p>
    </div>
  );
};

const styles={
	titleText:{
		color:'#555',
		fontFamily:'Arial'
	},
	contentText:{
		color:'#333',
		fontFamily:'Arial'
	},
}

export default BlogList;

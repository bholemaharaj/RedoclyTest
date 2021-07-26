import React from "react"
import apiCatalog from "./data/apiCatalog.json"

export function GetApisByGroup(group){
  console.log(group);
  let pages = apiCatalog.data.allSidebar.edges[0].node.pages;
  let apis = pages.find(o => o.group === group.value).pages;

  let response = [];

  apis.forEach(element => {
    let url = element.pages[0].page;

    if(url.includes('.mdx')){
      url = url.replace(".mdx","");
      url = "/" + url;
    }

    else if(url.includes('.md')){
      url = url.replace(".md","");
      url = "/" + url;
    }

    else if(url.includes('.page.yaml')){
      url = url.replace(".page.yaml/*","");
      url = "/" + url;
    }

    else if(url.includes('.yaml')){
      url = url.replace(".yaml/*","");
      url = "/" + url;
    }
    
    response.push(<a href={url}><ul style={{backgroundColor:'#E6ECEE', marginTop:'0', marginBottom:'1em', paddingTop:'0.5em', height:'2.5em'}} key={element.label}>{element.label}</ul></a>)
  });

  return <div>{response}</div>;
}
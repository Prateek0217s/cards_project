import React from 'react'
import Card from './components/card'
const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc_logo.svg/1200px-Meta_Platforms_Inc_logo.svg.png",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1200px-Netflix_logo.svg.png",
    companyName: "Netflix",
    datePosted: "7 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    companyName: "Google",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
    companyName: "Amazon",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc_logo.svg/1200px-Meta_Platforms_Inc_logo.svg.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  }
];
  return (
    <div className = "parent">
     {jobOpenings.map(function(elem){
      return <Card 
      company ={elem.companyName} 
      brand ={elem.brandLogo}
      date ={elem.datePosted}
      post ={elem.post}
      tag_1 ={elem.tag1}
      tag_2= {elem.tag2}
      pay ={elem.pay}
      location = {elem.location}
      />
           })}
          </div>
  )
}

export default App

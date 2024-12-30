import BlogList from "@/components/Blogs/BlogList"
import PageBar from "@/components/Header/PageBar"


function Blogs() {
  return (
    <div>
      <PageBar leftText={"Blogs"}/>
      <BlogList/>
    </div>
  )
}

export default Blogs
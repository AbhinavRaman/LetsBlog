
const Dropdown = () => {
  return (
    <div>
        <select name="products" id="products" className='bg-[#151414]'>
            <option value="hosting">LetsBlog Hosting</option>
            <option value="agencies">LetsBlog for Agencies</option>
            <option value="affiliate">Become an Affiliate</option>
            <option value="domain names">Domain Names</option>
            <option value="ai">AI Website Builder</option>
            <option value="create blog">Create a Blog</option>
            <option value="newsletter">Newsletter</option>
            <option value="professional email">Professional Email</option>
            <option value="design services">Website Design Services</option>
            <option value="commerce">Commerce</option>
        </select>        
    </div>
  )
}

export default Dropdown
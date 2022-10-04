import React from 'react'

const AdminFooter = () => {
  const date = new Date();
  console.log(date);
  const year = date.getFullYear()
 
  return (
    <div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-inner">
                {" "}
                <p>Copyright &#169; {year} All Right reserved Brantford</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AdminFooter

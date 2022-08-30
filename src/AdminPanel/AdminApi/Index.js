import axios from "axios";

const BaseUrl = "http://bantford.prometteur.in/";
const WebDashbordUrl = "localhost:3000/adminDashboard";
const propertyOwnerUrl = "localhost:3000/propertyOwner";
const endUserurl = "localhost:3000/endUser";

// Admin panel

//adminlogin
export const adminLogin = (values) => {
  axios
    .post(`${BaseUrl}/admin/admin-login`, values)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

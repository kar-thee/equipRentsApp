# equipRentsApp-client

a frontend application using Reactjs (part of full Stack MERN Application - equipRentsApp)
<br><br>
# App Link
<h4> https://equiprents-app.netlify.app/ </h4>
<br>

### User Credentials for App-Demo
<h4>ADMIN</h4>
<h6>email: admin@equiprents.com</h6>
<h6>password: admin</h6>

<h4>CUSTOMER</h4>
<h6>email: karthee@karthee.com</h6>
<h6>password: password</h6>
<br>

### Backend Repo Link
<h6>Express(NODEjs) server with mongodb - https://github.com/kar-thee/equipRents-server</h6>
<br>


## App Features
<h6>Landing Page</h6>
<h6>Store</h6>
<h6>Cart</h6>
<h6>ContactUs page</h6>
<h6>Account Mgmt pages</h6>
<br>

## EquipRentsApp - everything to know
<h5>This is a Equipment lending/renting E-commerce Platform developed using MERN stack</h5>

<h3>All User Interactions :</h3>

<h4>Regular User (user without loggingIn)</h4>
<h6>This kind of User can access Store and even can make purchase without registering UserInfo</h6>
<h6>All purchases made by this User, can be accessed by them later in the app by signingUp with same emailId used for Purchase before.</h6>
<h6>This user can send messages to the AppOwner/Admin via ContactUs Page</h6>
<br>

<h4>Registered User (user after loggedIn)</h4>
<h6>This User can get access to regular Store and also Personal Account Management pages (Profile and Orders) </h6>
<h6>Profile Page - Displays Personal Info according to the user</h6>
<h6>Orders Page - Displays All the Orders/Purchase made by the user with the same Email Id used for LoggingIn</h6>
<h6>This user can also send messages to the AppOwner/Admin via ContactUs Page</h6>
<br>

<h3>Admin User (use the admin Credentials provided above)</h3>
<h6>This User has Predominant access to this Application</h6>
<br>

<h5>Responsibilities of ADMIN</h5>
<h6>Orders Management Page - here Admin user can check all orders made by customers with access to their ProductCart details, OrderTotal, orderID, PaymentStatus and Customer EmailId</h6>
<h6>Query Ticket Management (Support Ticket) Page  - here Admin can reply back to the customers who made enquiry via contactUs Page. Reply by admin is sent as a Email to the Customer who enquired before, Can manage All query/Support Tickets here</h6>
<h6>Product CRUD page - here Admin user can manage All products available in the Store. Can Create new Products by using Amazon-S3 for storing images, Can Update Product Information, Can Delete Product (NOT YET IMPLEMENTED IN THIS FRONTEND REPO FOR SAFETY PURPOSES-preventing Loss of Data) and Finally READ/List All Product Information</h6>
<br>
<br>
<h4>Additional Info :</h4>
<h6>Created 325+ Products in 12 different Sections across various categories(as of Feb 05 2022)</h6>
<h6>All Product Images are stored in Amazon S3 Bucket (login as ADMIN and create new product to experience AMAZON-S3 integration)</h6>
<h6>Integrated RazorPay Payment-gateway with Test Mode, Visit App and place an order to experience RazorPay-PaymentGateway Integration</h6>
<h6>App built with mui-V5 (materialUI V5) components and also added Carousel in LandingPage using react-responsive-carousel library</h6>
<h6>Since Store has 325+ products, added React-Lazy Loading of Images and components for increasing Efficiency of App (after visiting store page, open devTools and go to network tab and watch how each and every image url request is made for every mouse scrolling near that component.)</h6>
<br>




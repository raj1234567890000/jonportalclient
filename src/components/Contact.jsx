import Nav from "@/Shared/Nav";
import { Label } from "@radix-ui/react-label";
import Footer from "./Footer";



const Contact = () => {

  
  return (
    <>
    <Nav/>
    <div className="allconatct">
    
     <div className="bg-gray-800  border rounded-md p-5 w-96  contact ">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Contact Form</h3><hr/>

              <form action="https://api.web3forms.com/submit" method="POST" >
                <input
                  type="hidden"
                  name="access_key"
                  value="08ff3a37-a1bc-4e00-b52e-68de6fa14be6"
                  className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                  
                />
                <div className="text-center mt-3 text-white">
                  <Label>Name</Label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 mb-4 rounded bg-gray-800 border focus:ring-2 focus:ring-indigo-500"
                  required
                  
                />
                </div>
                <div className="text-center text-white">
                  <Label>Email</Label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 mb-4 rounded bg-gray-800 border  focus:ring-2 focus:ring-indigo-500"
                  required
                />
                </div>
                <div className="text-center text-white">
      <Label className="block mb-2 text-sm font-medium">
        Contact
      </Label>
      <input
                  type="Number"
                  name="contact"
                  className="w-full p-2 mb-4 rounded bg-gray-800 border  focus:ring-2 focus:ring-indigo-500"
                  required
                  
                />
    </div>
                <div className="text-center text-white">
                  <Label>Message</Label>
                <input
                  type="text"
                  name="message"
                  className="w-full p-2 mb-4 rounded bg-gray-800 border  focus:ring-2 focus:ring-indigo-500 h-28"
                  required
                />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <Footer></Footer>
          </>
  )
}

export default Contact

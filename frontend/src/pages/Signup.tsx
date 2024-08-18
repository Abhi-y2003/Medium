import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = () => {
  return (
    <div className="flex w-screen">
        <div className="flex-1">
            <Auth/>
        </div>
        <div className="invisible lg:visible flex-1">
        <Quote/>
        </div>
        
    </div>
  )
}

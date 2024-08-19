import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = () => {
  return (
    <div className="lg:flex w-screen">
        <div className="flex-1">
            <Auth type="signin"/>
        </div>
        <div className="invisible lg:visible flex-1">
        <Quote/>
        </div>
        
    </div>
  )
}

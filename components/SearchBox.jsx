'user client'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

//components
import DatePicker from "./DatePicker"

const SearchBox = () => {
  return (
    <section className="bg-pink">
      {/* label */}
      <div>
        <Label>Where are you going?</Label>
        {/* input & icon */}
        <div className="relative flex items-center mb-[20px]">
          <Input id='destination' placeholder='try "Singapore"'/>
          <MapPin size={24} className="absolute right-6 text-black"/>
        </div>
        {/* date pickers */}
        <div>
          {/* check in */}
          <div>
            <label htmlFor="">Check In</label>
            <DatePicker />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchBox
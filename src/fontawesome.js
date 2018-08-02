import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookF,
    faInstagram,
    faPinterestP,
    faGooglePlusG,
    faLinkedinIn,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faInstagram, faPinterestP, faGooglePlusG, faLinkedinIn, faTwitter)

library.add(faStop)

dom.watch()


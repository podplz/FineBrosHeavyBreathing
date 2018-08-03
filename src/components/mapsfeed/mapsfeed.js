import React, {Component} from 'react';

class Mapsfeed extends Component{
    render(){
        return(
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHk4hlVkWz0PslalG22MLKobgO01PDPDE&callback=initMap"
                    type="text/javascript"></script>
        );
    }
}

export default Mapsfeed;
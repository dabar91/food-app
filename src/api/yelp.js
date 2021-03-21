import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer twqorAqDtzdBkegklxtHpVJumaqMveVpwSJ9aVXsOekb7I1EZMFM_D6rez78wLiHK70QAOtilIXlb1NC4BzJ74B4WyzJap7n1l4Cc4CevDKyIP3QHfFIY0SoxqQNYHYx'
    }
});
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer I_Xw3tcZpx-YRaLzwmSUtp5olUPBSumhRr15oHkQtl_eH6lVcrqQ42BJwZNcLFsTpCI578iqi0yykhV2PmK4blC3Zm5ie0wFTXQVuNYEI2K5gcCNEZxRvPo2T1azYHYx',
  },
});

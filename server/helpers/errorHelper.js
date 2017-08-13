module.exports = {
    handleError: (app) => {
    return (err, req, res, next) => {
        console.log(`Error: ${JSON.stringify(err.err, undefined, 2)}`);
	    const error =  err.err;
	    const status = err.status;
	    let errMessages = err.messages || [];
	    if(errMessages.length == 0){
            switch(err.status){
		        case 404:
		        errMessages = ['Not Found'];
		        break;
		        case 400:
		        errMessages = ['Error code 400'];
		        break;
		        case 500:
		        errMessages = ['Internal Server Error'];
		        break;
		        default:
		        errMessages = ['Unknown Error'];
	        }
        }else{
             errMessages = errMessages.map((err) => {return err.message})
        }

	    res.status(status).json({
		    error: {
			    status,
			    messages: errMessages
		    }
	    });
    }
},
    handleRouteNotFound: function (req, res, next) {
  	    next({status: 404});
    }
}
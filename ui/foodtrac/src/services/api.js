import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import axios from 'axios'

// initialize the frontend feathers client
const api = feathers()

// associate the res client with the URL of the API
const rc = rest('http://localhost:3030')

// configure the api to use axios along with the rest client
api.configure(rc.axios(axios))

// export the api for use elsewhere in our app
export default api

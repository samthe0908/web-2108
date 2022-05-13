import StatusCode from "../utils/StatusCode.js";

const alive = (req, res) => {
    res.status(StatusCode.OK).send(`API IS RUNNING`)
}

export default {
    alive
}
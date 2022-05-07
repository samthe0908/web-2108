const alive = (req, res) => {
    res.status(200).send('Connected to AliveAPI! YES!')
}
export default{
    alive
}
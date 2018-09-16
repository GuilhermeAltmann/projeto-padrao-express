module.exports = () => {

    var controller = {
        index: (req, res) => {

            res.json({'message': 'Ola'})
        }
    }

    return controller
}
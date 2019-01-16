const messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        messages.push({
            id: id,
            text: req.body.text,
            time: req.body.time,
        })
        id++
        res.json(messages)
    },

    read: (req, res) => {
        res.json(messages)
    },

    update: (req, res) => {
        let index

        messages.forEach((mes, i) => {
            if (mes.id === +req.params.id) {
                index = i
            }
        })

        messages[index] = {
            id: id,
            text: req.body.text || messages[index].text,
            time: req.body.time || messages[index].time,
        }

        res.json(messages)
    },

    delete: (req, res) => {
        let index

        messages.forEach((mes, i) => {
            if (mes.id === +req.params.id) {
                index = i
            }
        })

        messages.splice(index, 1)
        res.json(messages)
    },
}

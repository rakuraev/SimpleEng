const errorHeandler = require("../utils/errorHeandler")
const Word = require("../models/word")
module.exports.get_words = async (req, res) => {
    try {
        const words = await Word.aggregate([{$sample:{size:20}}])
        res.status(200).json(words)
    } catch(err){
        errorHeandler(res,err)
    }
}
module.exports.create_word = async (req, res) => {
    const possibleWord = await Word.findOne({
        word: req.body.word
    })
    if (!possibleWord) {
        const word = new Word({
            word: req.body.word,
            options: req.body.options,
            correctOption: req.body.correctOption
        })
        try {
            await word.save()
            res.status(201).json({
                word
            })
        } catch (err) {
            errorHeandler(req, err)
        }
    } else {
        res.status(409).json({
            message: "Такое слово уже существует"
        })
    }
}
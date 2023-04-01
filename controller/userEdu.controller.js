const { default: mongoose } = require('mongoose')
const userEducation = require('../model/userEdu.model')

exports.add = async (req, res) => {
    const { userId, degreeName, stream, details } = req.body

    if (!userId || !degreeName || !stream || !details) {
        return res.json({
            status: false,
            message: "userId,degreeName,stream,details fields are required"
        })
    }

    await new userEducation({
        userId: userId,
        degreeName: degreeName,
        stream: stream,
        details: details
    })
        .save()
        .then((success) => {
            return res.json({
                success: true,
                message: `user education added`,
                data: success
            })
        })
        .catch((error) => {
            return res.json({
                success: false,
                message: "something went wrong", error
            })
        })
}


exports.getAll = async (req, res) => {
    const { userId } = req.params

    if (!userId) {
        return res.json({
            status: false,
            message: "please provide userId"
        })
    }

    await userEducation.find({ userId: mongoose.Types.ObjectId(userId) })
        .then((success) => {
            return res.json({
                success: true,
                message: `user education details`,
                data: success
            })
        })
        .catch((error) => {
            return res.json({
                success: false,
                message: "something went wrong", error
            })
        })
}


exports.get = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.json({
            status: false,
            message: "please provide id"
        })
    }

    await userEducation.find({ _id: mongoose.Types.ObjectId(id) })
        .then((success) => {
            return res.json({
                success: true,
                message: `user education detail`,
                data: success
            })
        })
        .catch((error) => {
            return res.json({
                success: false,
                message: "something went wrong", error
            })
        })
}


exports.delete = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.json({
            status: false,
            message: "please provide id"
        })
    }

    await userEducation.findOneAndDelete({ _id: mongoose.Types.ObjectId(id) })
        .then((success) => {
            return res.json({
                success: true,
                message: `user education detail deleted`,
                data: success
            })
        })
        .catch((error) => {
            return res.json({
                success: false,
                message: "something went wrong", error
            })
        })
}


exports.update = async (req, res) => {
    const { id } = req.params
    const updateData = req.body

    if (!id) {
        return res.json({
            status: false,
            message: "please provide id"
        })
    }

    await userEducation.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) },
        {
            $set: updateData
        },
        {
            returnOriginal: false
        })
        .then((success) => {
            return res.json({
                success: true,
                message: `user education detail updated`,
                data: success
            })
        })
        .catch((error) => {
            return res.json({
                success: false,
                message: "something went wrong", error
            })
        })
}
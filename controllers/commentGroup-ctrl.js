const guide = require("../modules/guide-model");

// const comments = (req, res) =>{
//     guide.post()
//         .then(comments => req.json(comments))
//         .catch(err => res.status(400).json('Error' + err));
// };


// module.exports = {
//     comments,
// };


const comments = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Comment'
        })
    }

    const Comment = new guide(body);

    if (!Comment) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    const commentField = {};
    commentField.guide = req.guide.id;
        try {
            let Guide =  guide.findOne({ guides: req.guide.id });

            if (Guide) {
                Guide =  guide.insert(
                    { guide: req.guide.id },
                    { $set: commentField },
                    { new: true });

                return res.json(Guide);
            }
            Guide = new guide(commentField);
            Guide.save();
            res.json(Guide);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    };


    // Comment.save()
    //     .then(() => {
    //         return res.status(201).json({
    //             success: true,
    //             id: Comment._id,
    //             message: 'Comment added!'
    //         })
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         return res.status(400).json({
    //             error,
    //             message: 'Comment not added!'

    //         })

    //     })


module.exports = {
         comments
}

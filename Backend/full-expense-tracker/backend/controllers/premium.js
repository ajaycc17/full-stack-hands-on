const User = require("../models/user");
const Expense = require("../models/expense");

const sequelize = require("../utils/database");

exports.leaderBoard = async (req, res, next) => {
    try {
        const leaderBoardData = await User.findAll({
            attributes: [
                "id",
                "name",
                [
                    sequelize.fn("sum", sequelize.col("expenses.expense")),
                    "totalExpense",
                ],
            ],
            include: [
                {
                    model: Expense,
                    attributes: [],
                },
            ],
            group: ["user.id"],
            order: [["totalExpense", "DESC"]],
        });
        res.status(200).json(leaderBoardData);
    } catch (err) {
        console.log(err);
        res.status(403).json({ message: "Something went wrong", error: err });
    }
};

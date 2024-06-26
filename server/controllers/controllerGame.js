const { Game, Transaction } = require("../models");

class ControllerGame {
  static async game(req, res, next) {
    try {
      let { sortBy, filterBy } = req.query;

      sortBy = sortBy || "id";
      filterBy = filterBy || "";

      const whereClause = filterBy
        ? {
            title: {
              [Op.iLike]: `%${filterBy}%`,
            },
          }
        : {};

      const orderClause =
        sortBy === "title" || sortBy === "price"
          ? [[sortBy, "asc"]]
          : [["id", "asc"]];

      const games = await Game.findAndCountAll({
        where: whereClause,
        order: orderClause,
      });

      res.status(200).json(games.rows);
    } catch (error) {
      next(error);
    }
  }

  static async gameId(req, res, next) {
    try {
      const games = await Game.findByPk(req.params.id);

      if (!games) {
        throw { name: "Game not found", code: 404 };
      }

      res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  }

  static async myGame(req, res, next) {
    try {
      console.log(req.user.id);
      const data = await Transaction.findAll({
        where: { userId: +req.user.id },
        include: [
          {
            model: Game
          },
        ],
      });
      console.log(data);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerGame;

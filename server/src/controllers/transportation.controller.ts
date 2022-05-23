import { NextFunction, Request, Response } from "express";
import db from "../db";
import { TransportationInterface } from "../types/Transportation";
import { GetTransportationsQueryInterface } from "../types/GetTransportationsQuery";

export async function getTransportations(request: Request, response: Response, next: NextFunction) {
  try {
    const query = request.query as unknown as GetTransportationsQueryInterface;
    const { limit = 10, page = 1, sort = "id", orderby = "ASC", where = "" } = query;

    const whereQuery = where ? `WHERE ${where}` : "";

    const data = await db.query(
      `SELECT * FROM transportation
        ${whereQuery}
        ORDER BY ${sort} ${orderby};`,
    );

    const startSlice = limit * (page - 1);
    const endSlice = startSlice + Number(limit);
    response.json({ totalCount: data.rowCount, rows: data.rows.slice(startSlice, endSlice) });
  } catch (e) {
    next(e);
  }
}

export async function addTransportations(request: Request, response: Response, next: NextFunction) {
  try {
    const transportations = request.body as TransportationInterface[];
    const promises = transportations.map(({ distance, count, title }) => {
      return db.query(`INSERT INTO transportation (title, count, distance) values ($1, $2, $3)`, [
        title,
        count,
        distance,
      ]);
    });

    await Promise.all(promises);

    response.json("successful");
  } catch (e) {
    response.status(400).json("fail");
    next(e);
  }
}

"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

module.exports = async (req, res, next) => {
  const filter = req.query?.filter || {};

  const search = req.query?.search;
  //console.log(search)

  for (let key in search) search[key] = { $regex: search[key] };

  const sort = req.query?.sort || {};
  //console.log(sort)

  let limit = Number(req.query?.limit);

  limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20);
  //console.log(limit, typeof limit)

  let page = req.query?.page;
  page = page > 0 ? page : 1;

  let skip = Number(req.query?.skip);
  skip = skip > 0 ? skip : (page - 1) * limit;

  //   const data = await BlogPost.find({ ...filter, ...search })
  //     .sort(sort)
  //     .skip(skip)
  //     .limit(limit)
  //     .populate("categoryId");
  // };

  res.getModelList = async function (Model, populate = null) {
    return await Model.find({ ...filter, ...search })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };

  res.getModelListDetails = async function (Model) {
    const data = Model.find({ ...filter, ...search });

    let details = {
      filter,
      search,
      sort,
      skip,
      limit,
      page,
      pages: {
        previous: page > 1 ? page - 1 : false,
        current: page,
        next: page + 1,
        total: Math.ceil(data.length / limit),
      },
      totalRecords: data.length,
    };
    return details;
  };

  next();
};

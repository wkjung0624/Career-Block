module.exports = {
    testQuery: {
      query: "select * from USER_TB",
    },
    list: {
      query: "select * from t_person",
    },
    searchPerson: {
      query: "select * from t_person",
    },
    createPerson: {
      query: "insert into t_person set ?", // insert into t_person set first_name='John3', last_name='Doe3', email='john3@gmail.com'
    },
    deletePerson: {
      query: "delete from t_person where id=?",
    },
    updatePerson: {
      query: "update t_person set ? where id=?",
    },
  };
  
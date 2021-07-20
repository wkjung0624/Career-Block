module.exports = {
  createAccount: {
    query: "insert into USER_TB set ?",
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
  // 아래 참고
  // INSERT INTO table (a, b, c) VALUES (1,2,3)
  // INSERT INTO table SET a=1, b=2, c=3
};
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "ilham",
  port: 5432,
  database: "hr-db",
});

const app = express();
app.use(express.json());
const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Server listening on port ${port}`));

// region

app.get("/api/region", (req, res) => {
  pool.query("select * from regions", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/region/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from regions where region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/region", (req, res) => {
  const { region_name } = req.body;
  pool.query(
    "insert into regions (region_name) values ($1)",
    [region_name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/region/:id", (req, res) => {
  const { id } = req.params;
  const { region_name } = req.body;

  pool.query(
    "update regions set region_name = $1 where region_id = $2",
    [region_name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/region/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from regions where region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data Berhasil Dihapus");
    }
  );
});

// countries

// {
//     "country_id": "ZZ",
//     "country_name": "Zezo",
//     "region_id":8
// }

app.get("/api/country", (req, res) => {
  pool.query("select * from countries", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/country/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from countries where country_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/country", (req, res) => {
  const { country_id, country_name, region_id } = req.body;
  pool.query(
    "Insert into COUNTRIES (COUNTRY_ID,COUNTRY_NAME,REGION_ID) values ($1, $2, $3)",
    [country_id, country_name, region_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/country/:id", (req, res) => {
  const { id } = req.params;
  const { country_name, region_id } = req.body;

  pool.query(
    "update countries set country_name = $1, region_id = $2 where country_id = $3",
    [country_name, region_id, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/country/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from countries where country_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data Berhasil Dihapus");
    }
  );
});

// locations

// {
//   "street_address": "1297 viva",
//   "postal_code": "00777",
//   "city": "ziza",
//   "state_province": null,
//   "country_id": "AT"
// }

app.get("/api/location", (req, res) => {
  pool.query("select * from locations", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/location/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from locations where location_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/location", (req, res) => {
  const { street_address, postal_code, city, state_province, country_id } =
    req.body;
  pool.query(
    "Insert into LOCATIONS (STREET_ADDRESS,POSTAL_CODE,CITY,STATE_PROVINCE,COUNTRY_ID) values ($1, $2, $3, $4, $5)",
    [street_address, postal_code, city, state_province, country_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/location/:id", (req, res) => {
  const { id } = req.params;
  const { street_address, postal_code, city, state_province, country_id } =
    req.body;

  pool.query(
    "update locations set street_address = $1, postal_code = $2, city = $3, state_province = $4, country_id = $5 where location_id = $6",
    [street_address, postal_code, city, state_province, country_id, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/location/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from locations where location_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data Berhasil Dihapus");
    }
  );
});

// departments

// {
//   "department_name": "Service",
//   "manager_id": null,
//   "location_id": 1700
// }

app.get("/api/department", (req, res) => {
  pool.query("select * from departments", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/department/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from departments where department_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/department", (req, res) => {
  const { department_name, manager_id, location_id } = req.body;
  pool.query(
    "Insert into DEPARTMENTS (DEPARTMENT_NAME, MANAGER_ID, LOCATION_ID) values ($1, $2, $3)",
    [department_name, manager_id, location_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/department/:id", (req, res) => {
  const { id } = req.params;
  const { department_name, manager_id, location_id } = req.body;

  pool.query(
    "update departments set department_name = $1, manager_id = $2, location_id = $3 where department_id = $4",
    [department_name, manager_id, location_id, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/department/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from departments where department_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data Berhasil Dihapus");
    }
  );
});

// jobs

// {
//   "job_id": "SV_MAN",
//   "job_title": "Service Manager",
//   "min_salary": "2000.00",
//   "max_salary": "50000.00"
// }

app.get("/api/job", (req, res) => {
  pool.query("select * from jobs", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/job/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from jobs where job_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/job", (req, res) => {
  const { job_id, job_title, min_salary, max_salary } = req.body;
  pool.query(
    "Insert into JOBS (JOB_ID,JOB_TITLE,MIN_SALARY,MAX_SALARY) values ($1, $2, $3, $4)",
    [job_id, job_title, min_salary, max_salary],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/job/:id", (req, res) => {
  const { id } = req.params;
  const { job_title, min_salary, max_salary } = req.body;

  pool.query(
    "update jobs set job_title = $1, min_salary = $2, max_salary = $3 where job_id = $4",
    [job_title, min_salary, max_salary, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/job/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from jobs where job_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data Berhasil Dihapus");
  });
});

// employees

// {
//   "first_name": "Max",
//   "last_name": "Payne",
//   "email": "MaPay",
//   "phone_number": "510.111.4444",
//   "hire_date": "2005-07-18",
//   "salary": "15000.00",
//   "commission_pct": null,
//   "job_id": "SA_MAN",
//   "manager_id": null,
//   "department_id": 80
// }

app.get("/api/employee", (req, res) => {
  pool.query("select * from employees", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/employee/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from employees where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/employee", (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    job_id,
    salary,
    commision_pct,
    manager_id,
    department_id,
  } = req.body;
  pool.query(
    "Insert into EMPLOYEES (FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,COMMISSION_PCT,MANAGER_ID,DEPARTMENT_ID) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [
      first_name,
      last_name,
      email,
      phone_number,
      hire_date,
      job_id,
      salary,
      commision_pct,
      manager_id,
      department_id,
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/employee/:id", (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    job_id,
    salary,
    commision_pct,
    manager_id,
    department_id,
  } = req.body;

  pool.query(
    "update employees set first_name = $1, last_name = $2, email = $3, phone_number = $4, hire_date = $5, job_id = $6, salary = $7, commission_pct = $8, manager_id = $9, department_id = $10 where employee_id = $11",
    [
      first_name,
      last_name,
      email,
      phone_number,
      hire_date,
      job_id,
      salary,
      commision_pct,
      manager_id,
      department_id,
      id,
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/employee/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from employees where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data Berhasil Dihapus");
    }
  );
});

// job history

// {
//   "employee_id": 105,
//   "start_date": "2007-07-18",
//   "end_date": "2009-05-05",
//   "job_id": "SA_MAN",
//   "department_id": 60
// }

app.get("/api/jobhistory", (req, res) => {
  pool.query("select * from job_history", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/jobhistory/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from job_history where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/jobhistory", (req, res) => {
  const { employee_id, start_date, end_date, job_id, department_id } = req.body;
  pool.query(
    "Insert into JOB_HISTORY (EMPLOYEE_ID,START_DATE,END_DATE,JOB_ID,DEPARTMENT_ID) values ($1, $2, $3, $4, $5)",
    [employee_id, start_date, end_date, job_id, department_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/jobhistory/:id", (req, res) => {
  const { id } = req.params;
  const { start_date, end_date, job_id, department_id } = req.body;

  pool.query(
    "update job_history set start_date = $1, end_date = $2, job_id = $3, department_id = $4 where employee_id = $5",
    [start_date, end_date, job_id, department_id, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/jobhistory/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from job_history where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data Berhasil Dihapus");
    }
  );
});

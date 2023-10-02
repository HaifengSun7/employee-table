DROP SCHEMA IF EXISTS `employee_table`;
CREATE SCHEMA IF NOT EXISTS `employee_table` DEFAULT CHARACTER SET utf8;
USE `employee_table`;

/* create employee table */
DROP TABLE IF EXISTS `employee_table`.`employee`;
CREATE TABLE IF NOT EXISTS `employee_table`.`employee` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `salary` INT NOT NULL,
    `job_title` VARCHAR(255),
    PRIMARY KEY (`id`)
)
ENGINE = InnoDB;

/* initialize employee table with data from json file */
START TRANSACTION;
USE `employee_table`;
INSERT INTO `employee_table`.`employee` (`first_name`, `last_name`, `salary`) VALUES ('L1', 'B', 45700);
INSERT INTO `employee_table`.`employee` (`first_name`, `last_name`, `salary`) VALUES ('I1', 'M', 75000);
INSERT INTO `employee_table`.`employee` (`first_name`, `last_name`, `salary`) VALUES ('E1', 'S', 152000);
INSERT INTO `employee_table`.`employee` (`first_name`, `last_name`, `salary`) VALUES ('D1', 'N', 52500);
INSERT INTO `employee_table`.`employee` (`first_name`, `last_name`, `salary`) VALUES ('J1', 'H', 89650);
INSERT INTO `employee_table`.`employee` (`first_name`, `last_name`, `salary`) VALUES ('R1', 'A', 45500);
INSERT INTO `employee_table`.`employee` (`first_name`, `last_name`, `salary`) VALUES ('L2', 'B', 85000);
COMMIT;

/* create db user for this application*/
DROP USER IF EXISTS 'aet_admin';
CREATE USER 'aet_admin' IDENTIFIED BY 'aet_admin_pass';
GRANT ALL PRIVILEGES ON employee_table.* to 'aet_admin';
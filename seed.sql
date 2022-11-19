DROP USER readonly;
DROP TABLE passwords;
DROP TABLE items;

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    code TEXT,
    title TEXT,
    price TEXT,
    stock TEXT
);

CREATE TABLE passwords (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE USER readonly;
GRANT SELECT ON passwords TO readonly;
GRANT SELECT ON items TO readonly;

INSERT INTO items (code, title, price, stock) VALUES ('18450.18.21.019.032', 'Hammer screw with round head NI 1,85x3,17', 'EUR 8.22 / 100 pcs', '400 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('43050.18.00.031.060', 'Twisted nail 3,1/3,5x60', 'EUR 16.78 / kg', '5,00 kg');
INSERT INTO items (code, title, price, stock) VALUES ('43150.18.02.038.042', 'Capping nail+1 washer 3,8x042', 'EUR 38.68 / 100 pcs', '300 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('43300.18.01.015.035', 'Steel nail black, Pan head 1,5x35', 'EUR 5.18 / 100 pcs', '1 600 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('00100.14.00.040.025', 'Hexagon head bolt; 8.8; M 4 x 25', 'EUR 4.49 / 100 pcs', '500 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('00100.14.00.140.045', 'Hexagon head bolt; 8.8; M 14 x 45', 'EUR 42.75 / 100 pcs', '3 816 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('00100.14.00.160.095', 'Hexagon head bolt; 8.8; M 16 x 95', 'EUR 153.15 / 100 pcs', '85 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('18400.32.00.050.040', 'Round head rivet CU 05x040', 'EUR 158.70 / 100 pcs', '250 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('18400.32.00.050.040', 'Split pin CU 2,0x016', 'EUR 7.54 / 100 pcs', '900 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('00200.14.00.050.006', 'Hexagon head screw; 8.8; M 5 x 6', 'EUR 17.23 / 100 pcs', '1 000 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('00200.14.00.040.070', 'Hexagon head screw; 8.8; M 4 x 70', '	EUR 87.34 / 100 pcs', '539 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('00200.14.00.040.065', 'Hexagon head screw; 8.8; M 4 x 65', 'EUR 31.31 / 100 pcs', '400 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('00200.14.00.040.060', 'Hexagon head screw; 8.8; M 4 x 60', 'EUR 20.28 / 100 pcs', '100 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('00200.14.00.040.055', 'Hexagon head screw; 8.8; M 4 x 55', 'EUR 10.42 / 100 pcs', '380 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('06000.18.03.022.004', 'Pan head tapping screw with PH C Black zinc 2,2x4,5', 'EUR 1.25 / 100 pcs', '1 000 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('06000.18.01.063.120', 'Pan head tapping screw with PH C Zinc plated 6,3x120', 'EUR 24.47 / 100 pcs', '100 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('06000.18.01.063.100', 'Pan head tapping screw with PH C Zinc plated 6,3x100', 'EUR 17.11 / 100 pcs', '1 200 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('08360.20.00.060.120', 'Chipboard screw, Pan head, TORX; A2; 6 x 120', 'EUR 53.96 / 100 pcs', '100 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('08360.20.00.060.110', 'Chipboard screw, Pan head, TORX; A2; 6 x 110', 'EUR 44.69 / 100 pcs', '100 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('08370.18.01.030.016', 'Slotted round head wood screw; steel; zinc plated; 3 x 16', '	EUR 29.50 / 100 pcs', '832 pcs');
INSERT INTO items (code, title, price, stock) VALUES ('08370.18.01.035.020', 'Slotted round head wood screw; steel; zinc plated; 3,5 x 20', 'EUR 4.80 / 100 pcs	', '200 pcs');

INSERT INTO passwords (username, password) VALUES ('user1', 'pa$$w0rd');
INSERT INTO passwords (username, password) VALUES ('admin', 'AdMiN123567');


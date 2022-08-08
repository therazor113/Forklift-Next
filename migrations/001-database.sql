-- Up
CREATE TABLE Trailers (
    trailerId INTEGER PRIMARY KEY,
    doorLocation INTEGER,
    currentStatus TEXT,
    billCount INTEGER,
    pieces INTEGER,
    totalWeight INTEGER
);

CREATE TABLE Freight (
    proNumber INTEGER PRIMARY KEY,
    shipper TEXT,
    consignee TEXT,
    handlingUnits INTEGER,
    pieces INTEGER,
    totalWeight INTEGER,
    dim TEXT,
    dest INTEGER,
    dropLocation TEXT,
    dispatch TEXT,
    final TEXT,
    loaded INTEGER,
    docked INTEGER,
    onTrailer INTEGER REFERENCES Trailers(trailerId)
);

INSERT INTO Trailers (
    trailerId,
    doorLocation,
    currentStatus,
    billCount,
    pieces,
    totalWeight
) values (4321, 50, 'break', 1, 10, 10);
INSERT INTO Trailers (
    trailerId,
    doorLocation,
    currentStatus,
    billCount,
    pieces,
    totalWeight
) values (2222, 30, 'break', 0, 0, 0);
INSERT INTO Trailers (
    trailerId,
    doorLocation,
    currentStatus,
    billCount,
    pieces,
    totalWeight
) values (1234, 70, 'load', 0, 0, 0);

INSERT INTO Freight (
    proNumber,
    shipper,
    consignee,
    handlingUnits,
    pieces,
    totalWeight,
    dim,
    dest,
    dropLocation,
    dispatch,
    final,
    loaded,
    docked,
    onTrailer
) values (987654321, 'Johny', 'Joe', 1, 5, 10, 'N/A', 10, 'N/A', 'N/A', 'N/A', 50, null, 4321);
INSERT INTO Freight (
    proNumber,
    shipper,
    consignee,
    handlingUnits,
    pieces,
    totalWeight,
    dim,
    dest,
    dropLocation,
    dispatch,
    final,
    loaded,
    docked,
    onTrailer
) values (123456789, 'John', 'Johnson', 3, 10, 1000, 'N/A', 50, 'N/A', 'N/A', 'N/A', 50, null, 4321);
INSERT INTO Freight (
    proNumber,
    shipper,
    consignee,
    handlingUnits,
    pieces,
    totalWeight,
    dim,
    dest,
    dropLocation,
    dispatch,
    final,
    loaded,
    docked,
    onTrailer
) values (100000000, 'Hilly', 'Bango', 2, 7, 500, 'N/A', 134, 'N/A', 'N/A', 'N/A', null, null, null);
INSERT INTO Freight (
    proNumber,
    shipper,
    consignee,
    handlingUnits,
    pieces,
    totalWeight,
    dim,
    dest,
    dropLocation,
    dispatch,
    final,
    loaded,
    docked,
    onTrailer
) values (222222222, 'shipper', 'consignee', 10, 10, 10, 'N/A', 50, 'N/A', 'N/A', 'N/A', null, 50, null);


-- Down
DROP TABLE Trailers;
DROP TABLE Freight;

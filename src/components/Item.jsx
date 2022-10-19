import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = (props) => {
  const handleClick = async () => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (props.halamanFavorite) {
      for (let i = 0; i < data.length; i++) {
        if (props.item.id == data[i].id) data.splice(i, 1);
      }
      simpanData(data);
    } else {
      if (data == null) {
        let temp = [props.item];
        simpanData(temp);
      } else {
        pengecekanIdSama(data);
      }
    }
  };

  const pengecekanIdSama = (data) => {
    let jumlahIdSama = 0;
    let temp = data.slice();
    for (let i = 0; i < temp.length; i++) {
      if (props.item.id == temp[i].id) {
        jumlahIdSama++;
      }
    }
    if (jumlahIdSama == 0) {
      temp.push(props.item);
      simpanData(temp);
    } else {
      gagal();
    }
  };

  const simpanData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    if (props.halamanFavorite) {
      Swal.fire({
        title: "Sukses",
        text: "Item Berhasil Di hapus",
        icon: "success",
        confirmButtonText: "Berhasil",
      });
      props.parentCallback();
    } else {
      Swal.fire({
        title: "Sukses",
        text: "Item Berhasil Di Tambahkan",
        icon: "success",
        confirmButtonText: "Berhasil",
      });
    }
  };

  const gagal = () => {
    Swal.fire({
      title: "Gagal",
      text: "Item Sudah Ada",
      icon: "error",
      confirmButtonText: "Gagal",
    });
  };

  const halaman = props.halamanFavorite;
  return (
    <>
      <Card className="me-2" style={{ width: "17rem", color: "black" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Link to={props.navigate}>
            <Button
              variant="outline-secondary"
              className="mt-2"
              onClick={props.onClick}
            >
              Detail
            </Button>
          </Link>
          {halaman ? (
            <Button
              variant="danger"
              className="mt-2 ms-2"
              onClick={() => handleClick()}
            >
              Hapus Favorite
            </Button>
          ) : (
            <Button
              variant="danger"
              className="mt-2 ms-2"
              onClick={() => handleClick()}
            >
              Tambah Favorite
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;

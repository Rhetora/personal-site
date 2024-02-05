import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

"use strict";

export default function Page() {
  return (
    <div>
    <section className="top-banner">
      <div className="header-grid">
        <h1 className="heading">Should I go Kiting?</h1>
        <form>
          <input
            type="text"
            className="input-city"
            placeholder="Search for a city"
            autoFocus
          />
          <button type="submit">SUBMIT</button>
          <span className="msg"></span>
        </form>
      </div>
      <div className="header-grid">
        <h2 className="kites-heading">Kite Quiver</h2>
        <div className="kites-grid">
          <label className="kite-checkbox">
            <input id="4m" type="checkbox"/>
            4m
          </label>
          <label className="kite-checkbox">
            <input id="5m" type="checkbox"/>
            5m
          </label>
          <label className="kite-checkbox">
            <input id="6m" type="checkbox"/>
            6m
          </label>
          <label className="kite-checkbox">
            <input id="7m" type="checkbox"/>
            7m
          </label>
          <label className="kite-checkbox">
            <input id="8m" type="checkbox"/>
            8m
          </label>
          <label className="kite-checkbox">
            <input id="9m" type="checkbox"/>
            9m
          </label>
          <label className="kite-checkbox">
            <input id="10m" type="checkbox"/>
            10m
          </label>
          <label className="kite-checkbox">
            <input id="11m" type="checkbox"/>
            11m
          </label>
          <label className="kite-checkbox">
            <input id="12m" type="checkbox"/>
            12m
          </label>
          <label className="kite-checkbox">
            <input id="13m" type="checkbox"/>
            13m
          </label>
          <label className="kite-checkbox">
            <input id="15m" type="checkbox"/>
            15m
          </label>
          <label className="kite-checkbox">
            <input id="17m" type="checkbox"/>
            17m
          </label>
        </div>
        <input
          type="text"
          className="input-weight"
          placeholder="Enter weight in kgs"
        />
      </div>
    </section>
    <section className="ajax-section">
      <div className="container">
        <ul className="cities"></ul>
      </div>
    </section>
    </div>
  );
}
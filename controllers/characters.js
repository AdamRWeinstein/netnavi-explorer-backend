// DEPENDENCIES
const express = require('express')
const { Character } = require('../models')

// CONTROLLERS

// CHARACTER INDEX ACTION
async function index(req, res, next) {
    try {
        res.json(await Character.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};

// CHARACTER CREATE ACTION
async function create(req, res, next) {
    try {
        res.json(await Character.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
};

// CHARACTER SHOW ACTION
async function show(req, res, next) {
    try {
        res.json(await Character.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// CHARACTER DESTROY ACTION
async function destroy(req, res, next) {
    try {
        res.json(await Character.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// CHARACTER UPDATE ACTION
async function update(req, res, next) {
    try {
        res.json(
            await Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

// EXPORT Controller Action
module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
}
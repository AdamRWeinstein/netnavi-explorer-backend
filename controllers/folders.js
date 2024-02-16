// DEPENDENCIES
const express = require('express');
const { Folder } = require('../models');

// CONTROLLERS

// FOLDER INDEX ACTION
async function index(req, res) {
    try {
        const folders = await Folder.find({ userCode: req.params.userCode });
        res.json(folders);
    } catch (error) {
        res.status(400).json(error);
    }
}

// FOLDER CREATE ACTION
async function create(req, res) {
    try {
        const newFolderData = { ...req.body, userCode: req.params.userCode };
        const newFolder = await Folder.create(newFolderData);
        res.json(newFolder);
    } catch (error) {
        res.status(400).json(error);
    }
}

// FOLDER SHOW ACTION
async function show(req, res) {
    try {
        const folder = await Folder.findOne({ _id: req.params.folderId, userCode: req.params.userCode }).populate('battleChips');
        if (!folder) {
            return res.status(404).json({ message: "Folder not found" });
        }
        res.json(folder);
    } catch (error) {
        res.status(400).json(error);
    }
}

// FOLDER DELETE ACTION
async function destroy(req, res) {
    try {
        const deletedFolder = await Folder.findOneAndDelete({ _id: req.params.folderId, userCode: req.params.userCode });
        if (!deletedFolder) {
            return res.status(404).json({ message: "Folder not found" });
        }
        res.json(deletedFolder);
    } catch (error) {
        res.status(400).json(error);
    }
}

// FOLDER UPDATE ACTION
async function update(req, res) {
    try {
        const updatedFolder = await Folder.findOneAndUpdate({ _id: req.params.folderId, userCode: req.params.userCode }, req.body, { new: true });
        if (!updatedFolder) {
            return res.status(404).json({ message: "Folder not found" });
        }
        res.json(updatedFolder);
    } catch (error) {
        res.status(400).json(error);
    }
}

// EXPORT Controller Actions
module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
};

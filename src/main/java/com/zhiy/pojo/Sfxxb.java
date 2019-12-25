package com.zhiy.pojo;

public class Sfxxb {
    private String sfdm;

    private String sfmc;

    public Sfxxb(String sfdm, String sfmc) {
        this.sfdm = sfdm;
        this.sfmc = sfmc;
    }

    public Sfxxb() {
        super();
    }

    public String getSfdm() {
        return sfdm;
    }

    public void setSfdm(String sfdm) {
        this.sfdm = sfdm == null ? null : sfdm.trim();
    }

    public String getSfmc() {
        return sfmc;
    }

    public void setSfmc(String sfmc) {
        this.sfmc = sfmc == null ? null : sfmc.trim();
    }
}
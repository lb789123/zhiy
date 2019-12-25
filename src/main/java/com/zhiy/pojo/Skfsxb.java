package com.zhiy.pojo;

public class Skfsxb {
    private Integer id;

    private String sfdm;

    private String nf;

    private String pcbm;

    private String klbm;

    private Integer fsx;

    public Skfsxb(Integer id, String sfdm, String nf, String pcbm, String klbm, Integer fsx) {
        this.id = id;
        this.sfdm = sfdm;
        this.nf = nf;
        this.pcbm = pcbm;
        this.klbm = klbm;
        this.fsx = fsx;
    }

    public Skfsxb() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSfdm() {
        return sfdm;
    }

    public void setSfdm(String sfdm) {
        this.sfdm = sfdm == null ? null : sfdm.trim();
    }

    public String getNf() {
        return nf;
    }

    public void setNf(String nf) {
        this.nf = nf == null ? null : nf.trim();
    }

    public String getPcbm() {
        return pcbm;
    }

    public void setPcbm(String pcbm) {
        this.pcbm = pcbm == null ? null : pcbm.trim();
    }

    public String getKlbm() {
        return klbm;
    }

    public void setKlbm(String klbm) {
        this.klbm = klbm == null ? null : klbm.trim();
    }

    public Integer getFsx() {
        return fsx;
    }

    public void setFsx(Integer fsx) {
        this.fsx = fsx;
    }
}